# EcoPlastic ERP System

Hệ thống quản lý doanh nghiệp cho EcoPlastic Vietnam - Nhà máy sản xuất túi nhựa thân thiện môi trường.

## 🏭 Giới Thiệu

EcoPlastic Vietnam chuyên sản xuất các sản phẩm nhựa tái chế:
- Túi LDPE, HDPE các loại
- Màng nhựa PE 
- Sản phẩm nhựa tái chế khác

## 🚀 Tech Stack

### Backend
- **Django 5.1** + Django REST Framework
- **PostgreSQL 15+** Database
- **JWT Authentication** (Simple JWT)
- **Swagger/OpenAPI** Documentation
- **CORS Headers** enabled

### Frontend  
- **React 19** + TypeScript
- **Bootstrap 5** + React Bootstrap
- **Axios** for API calls
- **React Router v7**
- **Modern Hooks** pattern

## 📋 Modules

1. **🎯 Finished Goods (Thành phẩm)**
   - Quản lý danh mục sản phẩm hoàn thiện
   - Theo dõi thông tin kỹ thuật, chất lượng

2. **📦 Inventory (Kho hàng)**
   - Quản lý tồn kho theo kho, theo sản phẩm
   - Nhập/xuất kho, kiểm kho
   - Báo cáo tồn kho, cảnh báo hết hàng

3. **🏭 Manufacturing (Sản xuất)**
   - Lập kế hoạch sản xuất
   - Theo dõi tiến độ sản xuất
   - Quản lý công thức, quy trình

4. **✅ Quality (Chất lượng)**
   - Kiểm soát chất lượng đầu vào/đầu ra
   - Quản lý tiêu chuẩn, chứng nhận
   - Báo cáo chất lượng

5. **🛒 Sales (Bán hàng)**
   - Quản lý khách hàng, đơn hàng
   - Báo giá, hợp đồng
   - Theo dõi công nợ

## 🗂️ Cấu Trúc Dự Án

```
ecoplastic_erp/
├── backend/                 # Django REST API
│   ├── core/               # Core settings & config
│   │   ├── settings.py     # Django settings
│   │   ├── urls.py         # Main URL routing
│   │   └── wsgi.py         # WSGI config
│   ├── apps/               # Django applications
│   │   ├── authentication/ # JWT auth & users
│   │   ├── finished_goods/ # Quản lý thành phẩm
│   │   ├── inventory/      # Quản lý kho hàng
│   │   ├── manufacturing/  # Quản lý sản xuất
│   │   ├── quality/        # Kiểm soát chất lượng
│   │   └── sales/          # Quản lý bán hàng
│   ├── requirements.txt    # Python dependencies
│   ├── manage.py          # Django management
│   └── .env.example       # Environment variables
├── frontend/               # React TypeScript app
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── common/    # Shared components
│   │   │   ├── finished-goods/
│   │   │   ├── inventory/
│   │   │   └── ...
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript definitions
│   │   ├── hooks/         # Custom React hooks
│   │   └── App.tsx        # Main app component
│   ├── package.json       # Node dependencies
│   └── tsconfig.json      # TypeScript config
├── docs/                  # Documentation
│   ├── API.md            # API documentation
│   ├── DEPLOYMENT.md     # Deployment guide
│   └── DEVELOPMENT.md    # Development guide
├── docker-compose.yml     # Docker setup
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🛠️ Quick Start

### 1. Clone & Setup
```bash
git clone <repository-url>
cd ecoplastic_erp
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate     # Windows
source venv/bin/activate  # Linux/Mac

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Access Application
- **Backend API**: http://localhost:8000/api/
- **API Documentation**: http://localhost:8000/api/docs/
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:8000/admin/

## 📊 Features

### ✅ Completed
- [x] Project structure setup
- [x] Django REST API foundation
- [x] React TypeScript frontend
- [x] JWT Authentication
- [x] Finished Goods module
- [x] Inventory management
- [x] API documentation

### 🚧 In Progress
- [ ] Manufacturing module
- [ ] Quality control
- [ ] Sales management
- [ ] Advanced reporting
- [ ] Mobile responsive UI

### 📋 Planned
- [ ] Real-time notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Integration with accounting systems

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📞 Support

- **Email**: support@ecoplastic.com.vn
- **Phone**: +84 xxx xxx xxx
- **Documentation**: [docs/](./docs/)

---

**EcoPlastic Vietnam** - *Sustainable Plastic Solutions* 🌱
