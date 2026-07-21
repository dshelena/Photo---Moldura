@echo off
title Photo Booth - Servidor Local
echo.
echo  ================================
echo   Photo Booth - Jardim Encantado
echo  ================================
echo.
echo Iniciando servidor...
echo.

cd /d "%~dp0"

start http://localhost:8000

"python-portable\python.exe" -m http.server 8000
