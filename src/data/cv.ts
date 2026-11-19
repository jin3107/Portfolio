import type { Lang } from '../i18n/translations'

export type CvProject = {
  name: string
  role: string
  stack: string
  link: string
  bullets: string[]
}

export type CvContent = {
  name: string
  title: string
  location: string
  summary: string
  headings: {
    summary: string
    projects: string
    skills: string
    experience: string
    education: string
  }
  projects: CvProject[]
  skills: { label: string; items: string }[]
  experience: { title: string; org: string; period: string; bullets: string[] }
  education: { school: string; degree: string; period: string }
}

export const cvContact = {
  email: 'tanchuonghuynh3@gmail.com',
  github: 'github.com/jin3107',
  githubUrl: 'https://github.com/jin3107',
  linkedin: 'linkedin.com/in/huỳnh-tấn-chương',
  linkedinUrl:
    'https://www.linkedin.com/in/hu%E1%BB%B3nh-t%E1%BA%A5n-ch%C6%B0%C6%A1ng-7b80242b2/',
}

export const cvContent: Record<Lang, CvContent> = {
  en: {
    name: 'Huynh Tan Chuong',
    title: 'Backend Developer Intern (ASP.NET Core, .NET 8)',
    location: 'Tien Giang, Vietnam',
    summary:
      'Final-year IT student looking for a Backend (.NET) internship. I have built three full-stack apps end to end (REST API, database, authentication, background jobs, Docker) and published all of them on GitHub. I like clean layering, readable code, and learning by shipping.',
    headings: {
      summary: 'Summary',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
    },
    projects: [
      {
        name: 'V-Academy Connect',
        role: 'Multi-tenant academy management platform',
        stack: '.NET 8 · Clean Architecture · EF Core · MySQL · Quartz.NET · React + TypeScript',
        link: 'github.com/jin3107/V-Academy-Connect',
        bullets: [
          'Designed tenant-scoped access: a SuperAdmin sees every tenant, while TenantAdmin/Teacher only see their own tenant’s data.',
          'Implemented cookie-based JWT (HttpOnly) with Google Sign-In and an OTP password-reset flow (6-digit code, 5-minute expiry, sent via MailKit).',
          'Added a daily Quartz.NET job that downgrades expired subscriptions and records every run as a background-job log; structured logging with Serilog.',
        ],
      },
      {
        name: 'ClinicManagement',
        role: 'Clinic management system, team lead and backend owner',
        stack: 'ASP.NET Core (.NET 8) · EF Core Code First · Identity · JWT · AutoMapper · Docker',
        link: 'github.com/jin3107/ClinicManagement',
        bullets: [
          'Built the REST API for appointments, prescriptions, invoices and reports with role-based access for Admin, Doctor, Receptionist and Patient.',
          'Layered Controller → Service → Repository with DTO mapping; JWT access token plus refresh token stored in an HttpOnly cookie; Swagger docs.',
        ],
      },
      {
        name: 'TodoApp: Basic to Modern',
        role: 'Full-stack app evolved from plain CRUD to production-style',
        stack: 'ASP.NET Core · Redis · Quartz.NET · Docker Compose · Nginx · React + TypeScript',
        link: 'github.com/jin3107/TodoApp_BasicToModern',
        bullets: [
          'Refresh-token rotation, email OTP verification and admin-only report endpoints.',
          'Redis caching for expensive dashboard queries with in-memory fallback; Quartz jobs for reminders and cleanup; containerised with Docker Compose behind Nginx.',
        ],
      },
    ],
    skills: [
      { label: 'Backend', items: 'C#, ASP.NET Core Web API, EF Core, ASP.NET Identity, JWT, AutoMapper, Quartz.NET, Serilog, Swagger' },
      { label: 'Architecture', items: 'Repository Pattern, Clean Architecture, CQRS (familiar), DTO / layered design' },
      { label: 'Data & Infra', items: 'MySQL, Redis, Docker, Docker Compose, Nginx, Git / GitHub' },
      { label: 'Frontend (basic)', items: 'React, TypeScript, Vite, Ant Design, Axios, SCSS' },
    ],
    experience: {
      title: 'Team Lead, Software Engineering course project',
      org: 'Tien Giang University',
      period: 'One course term',
      bullets: [
        'Led a student team building a clinic management system; split the work and owned the backend.',
        'Continued the project afterwards as ClinicManagement and am migrating it from Repository Pattern to Clean Architecture.',
      ],
    },
    education: {
      school: 'Tien Giang University',
      degree: 'B.Sc. Information Technology, Web Development track (4th-year student)',
      period: 'In progress',
    },
  },
  vi: {
    name: 'Huỳnh Tấn Chương',
    title: 'Thực tập sinh Backend (ASP.NET Core, .NET 8)',
    location: 'Tiền Giang, Việt Nam',
    summary:
      'Sinh viên CNTT năm cuối, đang tìm vị trí thực tập Backend (.NET). Đã tự xây dựng ba ứng dụng full-stack từ đầu đến cuối (REST API, cơ sở dữ liệu, xác thực, background job, Docker) và public toàn bộ trên GitHub. Ưu tiên code phân tầng rõ ràng, dễ đọc, và học qua việc làm ra sản phẩm thật.',
    headings: {
      summary: 'Giới thiệu',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      education: 'Học vấn',
    },
    projects: [
      {
        name: 'V-Academy Connect',
        role: 'Nền tảng quản lý trung tâm/học viện đa tenant',
        stack: '.NET 8 · Clean Architecture · EF Core · MySQL · Quartz.NET · React + TypeScript',
        link: 'github.com/jin3107/V-Academy-Connect',
        bullets: [
          'Thiết kế phân quyền theo tenant: SuperAdmin xem được mọi tenant, còn TenantAdmin/Teacher chỉ thấy dữ liệu của tenant mình.',
          'Cài đặt JWT qua cookie (HttpOnly) kèm Google Sign-In và luồng đặt lại mật khẩu bằng OTP (mã 6 số, hết hạn sau 5 phút, gửi qua MailKit).',
          'Thêm job Quartz.NET chạy hằng ngày để hạ gói các subscription hết hạn và ghi log mỗi lần chạy; logging có cấu trúc bằng Serilog.',
        ],
      },
      {
        name: 'ClinicManagement',
        role: 'Hệ thống quản lý phòng khám, trưởng nhóm và phụ trách backend',
        stack: 'ASP.NET Core (.NET 8) · EF Core Code First · Identity · JWT · AutoMapper · Docker',
        link: 'github.com/jin3107/ClinicManagement',
        bullets: [
          'Xây dựng REST API cho lịch hẹn, đơn thuốc, hóa đơn và báo cáo, phân quyền cho Admin, Bác sĩ, Lễ tân và Bệnh nhân.',
          'Phân tầng Controller → Service → Repository, map DTO; access token JWT kèm refresh token lưu trong HttpOnly cookie; tài liệu Swagger.',
        ],
      },
      {
        name: 'TodoApp: Basic to Modern',
        role: 'Ứng dụng full-stack nâng cấp dần từ CRUD cơ bản lên kiểu production',
        stack: 'ASP.NET Core · Redis · Quartz.NET · Docker Compose · Nginx · React + TypeScript',
        link: 'github.com/jin3107/TodoApp_BasicToModern',
        bullets: [
          'Refresh-token rotation, xác thực email bằng OTP và các endpoint báo cáo chỉ dành cho admin.',
          'Cache Redis cho các truy vấn dashboard nặng (có fallback memory cache); job Quartz nhắc việc và dọn dẹp; đóng gói bằng Docker Compose sau Nginx.',
        ],
      },
    ],
    skills: [
      { label: 'Backend', items: 'C#, ASP.NET Core Web API, EF Core, ASP.NET Identity, JWT, AutoMapper, Quartz.NET, Serilog, Swagger' },
      { label: 'Kiến trúc', items: 'Repository Pattern, Clean Architecture, CQRS (đã làm quen), thiết kế phân tầng / DTO' },
      { label: 'Dữ liệu & Hạ tầng', items: 'MySQL, Redis, Docker, Docker Compose, Nginx, Git / GitHub' },
      { label: 'Frontend (cơ bản)', items: 'React, TypeScript, Vite, Ant Design, Axios, SCSS' },
    ],
    experience: {
      title: 'Trưởng nhóm, đồ án môn Công nghệ phần mềm',
      org: 'Trường Đại học Tiền Giang',
      period: 'Một học kỳ',
      bullets: [
        'Dẫn dắt nhóm sinh viên xây dựng hệ thống quản lý phòng khám; chia việc và phụ trách backend.',
        'Tiếp tục phát triển thành dự án ClinicManagement và đang migrate từ Repository Pattern sang Clean Architecture.',
      ],
    },
    education: {
      school: 'Trường Đại học Tiền Giang',
      degree: 'Cử nhân Công nghệ thông tin, định hướng Phát triển Web (sinh viên năm 4)',
      period: 'Đang theo học',
    },
  },
}

/** Where the generated PDFs live (see scripts/build-cv.mjs). */
export const cvFile = (lang: Lang) => `/cv/Huynh-Tan-Chuong-CV-${lang}.pdf`
