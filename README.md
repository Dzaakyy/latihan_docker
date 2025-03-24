# Latihan JS

Ini adalah aplikasi sederhana full-stack pake React (frontend), Node.js/Express (backend), dan MySQL, yang dibungkus pake Docker Compose.

## Cara Setup dan Jalanin

## 1. Clone Repo
Buka terminal (CMD/PowerShell) ketik:
```bash
git clone https://github.com/Dzaakyy/latihan_docker.git
cd latihan-js
```

## 2. Atur MySQL (XAMPP)
- **Nyalain XAMPP Control Panel, pastiin MySQL jalan.**
- **Buka file D:\xampp\mysql\bin\my.ini (sesuain sama lokasi XAMPP).**
- **Tambah atau edit di bagian [mysqld]:**
```text
bind-address=0.0.0.0
```

- **Restart MySQL di XAMPP (stop trus start).**
- **Bikin database db_crud lewat phpMyAdmin atau MySQL CLI:**
```sql
CREATE DATABASE db_crud;
```

- **Bikin tabel users**
```sql
USE db_crud;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  gender VARCHAR(10)
);
```

## 3. Jalanin Pake Docker Compose
Ketik
```bash
docker-compose up --build
```
- **Ini akan :**
    - Build dan nyalain container frontend (React) di http://localhost:3000.
    - Build dan nyalain container backend (Express) di http://localhost:5000, nyambung ke MySQL pake host.docker.internal.

## 4. Cek Aplikasi 
- **Frontend: Buka http://localhost:3000 di browser.**
- **Backend API: Tes endpoint kayak http://localhost:5000 (sesuain sama route).**

## 5. Cara Matikan
```bash
docker-compose down
```

## 5. Cara Nyalain Lagi
```bash
docker-compose up
```
