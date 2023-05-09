# Hypertension App
## Front-end: React
* `npm install`
* `npm start`
## Back-end:Django
* `pip install --pre --no-binary :all: pyodbc`
* `brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release`
* `brew update`
* `HOMEBREW_ACCEPT_EULA=Y brew install msodbcsql17 mssql-tools`
* `pip install djangorestframework`
* `python manage.py migrate`
* `python manage.py runserver`
## Database: MSSQL
* Follow: https://medium.com/geekculture/how-to-install-sql-server-in-mac-m1-41121e110214
* `docker pull mcr.microsoft.com/azure-sql-edge`
* `docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Pwd123456@" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/azure-sql-edge`
* Download and install Azure Data Studio at https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15&tabs=redhat-install%2Credhat-uninstall#get-azure-data-studio-for-macos
* Connect use the credential server:sql1;username:SA;password:Pwd123456@


