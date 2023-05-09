FROM --platform=linux/amd64  python:3.10-bullseye

ENV PYTHONUNBUFFERED=1
WORKDIR /api
RUN pip install django django-cors-headers djangorestframework
RUN pip install pyodbc 
RUN pip install mssql-django
RUN apt-get install -y curl apt-transport-https 
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - 
RUN curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list 
RUN apt-get update 
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17 unixodbc-dev
RUN ACCEPT_EULA=Y apt-get install -y mssql-tools
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
RUN apt-get update

COPY . /api/ 
EXPOSE 8000

# CMD ["python", "manage.py", "migrate"]

CMD ["python", "manage.py", "runserver"]
