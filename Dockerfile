#FROM mcr.microsoft.com/mssql/server:2019-CU13-ubuntu-20.04
FROM mcr.microsoft.com/mssql/server:2022-latest

# Copy initialization scripts
# Create app directory
WORKDIR /usr/src/app

# Copy initialization scripts
COPY ./entrypoint.sh /usr/src/app
COPY ./createdb.sh /usr/src/app
COPY ./sql-6440.sql /usr/src/app
             
# Set environment variables, not have to write them with the docker run command
# Note: make sure that your password matches what is in the run-initialization script 
ENV MSSQL_SA_PASSWORD Pwd123456@!
ENV ACCEPT_EULA Y
ENV MSSQL_PID Express

# Expose port 1433 in case accessing from other container
# Expose port externally from docker-compose.yml
EXPOSE 1433
# FROM mcr.microsoft.com/mssql/server:2022-latest
# COPY . /usr/src/app

# Run Microsoft SQL Server and initialization script (at the same time)
CMD /bin/bash ./entrypoint.sh
#RUN /opt/mssql-tools/bin/sqlcmd -i sql-6440.sql
