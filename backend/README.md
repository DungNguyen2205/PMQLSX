# EcoPlastic ERP Backend

Một backend server đơn giản cho hệ thống ERP của EcoPlastic Vietnam.

## Chức năng

### Endpoint chính
- `GET /api/ping` - Trả lời câu hỏi "Bạn còn đó chứ?" 
  - Response: `{"message": "Có, tôi vẫn ở đây!", "timestamp": "...", "status": "online"}`

- `GET /` - Thông tin hệ thống
  - Response: `{"message": "EcoPlastic ERP System Backend", "status": "running"}`

## Cách chạy

```bash
# Cài đặt dependencies
npm install

# Chạy server
npm start

# Chạy trong development mode với nodemon
npm run dev

# Chạy tests
npm test
```

## Cấu hình

Server chạy trên port 3000 (có thể thay đổi trong file `.env`)

```
PORT=3000
NODE_ENV=development
```

## Test

```bash
# Test endpoint ping
curl http://localhost:3000/api/ping

# Response mong đợi:
# {"message":"Có, tôi vẫn ở đây!","timestamp":"2025-08-01T07:57:06.169Z","status":"online"}
```