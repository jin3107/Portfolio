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
    stack: string
  }
  projects: CvProject[]
  skills: { label: string; items: string }[]
  experience: { title: string; org: string; period: string; bullets: string[] }
  education: { school: string; degree: string; period: string }
}

// Display text and href for every contact link. Keep these in sync with the live profiles.
export const cvContact = {
  email: 'tanchuonghuynh3@gmail.com',
  phone: '0948 637 759',
  phoneUrl: 'tel:+84948637759',
  github: 'github.com/jin3107',
  githubUrl: 'https://github.com/jin3107',
  linkedin: 'linkedin.com/in/chuong-huynh-7b80242b2',
  linkedinUrl: 'https://www.linkedin.com/in/chuong-huynh-7b80242b2/',
  portfolio: 'jin3107.is-a.dev',
  portfolioUrl: 'https://jin3107.is-a.dev',
}

export const cvContent: Record<Lang, CvContent> = {
  en: {
    name: 'Huynh Tan Chuong',
    title: 'Backend Developer Intern (.NET / ASP.NET Core)',
    location: 'Dong Thap, Vietnam',
    summary:
      'Final-year IT student looking for a Backend (.NET) internship. I built three full-stack apps end to end (REST API, database, authentication, background jobs, Docker) and published them on GitHub.',
    headings: {
      summary: 'Summary',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      stack: 'Tech',
    },
    projects: [
      {
        name: 'V-Academy Connect',
        role: 'Multi-tenant academy management',
        stack: '.NET 8, Clean Architecture, EF Core, MySQL, Quartz.NET, React, TypeScript',
        link: 'github.com/jin3107/V-Academy-Connect',
        bullets: [
          'Designed tenant-scoped access: SuperAdmin sees all tenants, other roles see only their own.',
          'Built cookie-based JWT (HttpOnly) with Google Sign-In and OTP password reset (6-digit code, 5-minute expiry, sent via MailKit).',
          'Added a daily Quartz.NET job that downgrades expired subscriptions and logs each run.',
        ],
      },
      {
        name: 'ClinicManagement',
        role: 'Clinic management, team lead',
        stack: 'ASP.NET Core (.NET 8), EF Core Code First, Identity, JWT, AutoMapper, Docker',
        link: 'github.com/jin3107/ClinicManagement',
        bullets: [
          'Built the REST API for appointments, prescriptions, invoices and reports, with role-based access for Admin, Doctor, Receptionist and Patient.',
          'Structured the backend in Clean Architecture layers (API, Application, Domain, Infrastructure) with DTO mapping; refresh token in an HttpOnly cookie; Swagger docs.',
        ],
      },
      {
        name: 'TodoApp: Basic to Modern',
        role: 'Full-stack todo app',
        stack: 'ASP.NET Core, Redis, Quartz.NET, Docker Compose, Nginx, React, TypeScript',
        link: 'github.com/jin3107/TodoApp_BasicToModern',
        bullets: [
          'Implemented refresh-token rotation, email OTP verification and admin-only report endpoints.',
          'Cached report queries in Redis (30-minute TTL), switchable to in-memory cache via config; Quartz jobs for reminders and cleanup; Docker Compose behind Nginx.',
        ],
      },
    ],
    skills: [
      { label: 'Backend', items: 'C#, ASP.NET Core Web API, EF Core, Identity, JWT, AutoMapper, Quartz.NET, Serilog' },
      { label: 'Architecture', items: 'Repository Pattern, Clean Architecture, CQRS (familiar), layered design' },
      { label: 'Data & Infra', items: 'MySQL, Redis, Docker Compose, Nginx, Git / GitHub' },
      { label: 'Frontend (basic)', items: 'React, TypeScript, Vite, Ant Design, Axios, SCSS' },
    ],
    experience: {
      title: 'Team Lead, Software Engineering course project',
      org: 'Tien Giang University',
      period: 'One course term',
      bullets: [
        'Led a student team building a clinic management system; split tasks and owned the backend.',
        'Continued it as ClinicManagement and migrated it from Repository Pattern to Clean Architecture.',
      ],
    },
    education: {
      school: 'Tien Giang University',
      degree: 'B.Sc. Information Technology, Web Development track',
      period: '4th-year student',
    },
  },
  vi: {
    name: 'Huỳnh Tấn Chương',
    title: 'Thực tập sinh Backend (.NET / ASP.NET Core)',
    location: 'Đồng Tháp, Việt Nam',
    summary:
      'Sinh viên CNTT năm cuối, đang tìm vị trí thực tập Backend (.NET). Đã tự xây dựng ba ứng dụng full-stack từ đầu đến cuối (REST API, cơ sở dữ liệu, xác thực, background job, Docker) và public trên GitHub.',
    headings: {
      summary: 'Giới thiệu',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      education: 'Học vấn',
      stack: 'Công nghệ',
    },
    projects: [
      {
        name: 'V-Academy Connect',
        role: 'Quản lý trung tâm/học viện đa tenant',
        stack: '.NET 8, Clean Architecture, EF Core, MySQL, Quartz.NET, React, TypeScript',
        link: 'github.com/jin3107/V-Academy-Connect',
        bullets: [
          'Thiết kế phân quyền theo tenant: SuperAdmin xem mọi tenant, TenantAdmin và Teacher chỉ thấy dữ liệu của tenant mình.',
          'Cài đặt JWT qua cookie (HttpOnly), Google Sign-In và đặt lại mật khẩu bằng OTP (mã 6 số, hết hạn sau 5 phút, gửi qua MailKit).',
          'Thêm job Quartz.NET chạy hằng ngày để hạ gói subscription hết hạn và ghi log mỗi lần chạy.',
        ],
      },
      {
        name: 'ClinicManagement',
        role: 'Quản lý phòng khám, trưởng nhóm backend',
        stack: 'ASP.NET Core (.NET 8), EF Core Code First, Identity, JWT, AutoMapper, Docker',
        link: 'github.com/jin3107/ClinicManagement',
        bullets: [
          'Xây dựng REST API cho lịch hẹn, đơn thuốc, hóa đơn và báo cáo, phân quyền cho Admin, Bác sĩ, Lễ tân và Bệnh nhân.',
          'Tổ chức backend theo các tầng Clean Architecture (API, Application, Domain, Infrastructure), map DTO; refresh token trong HttpOnly cookie; tài liệu Swagger.',
        ],
      },
      {
        name: 'TodoApp: Basic to Modern',
        role: 'Ứng dụng todo full-stack',
        stack: 'ASP.NET Core, Redis, Quartz.NET, Docker Compose, Nginx, React, TypeScript',
        link: 'github.com/jin3107/TodoApp_BasicToModern',
        bullets: [
          'Cài đặt refresh-token rotation, xác thực email bằng OTP và các endpoint báo cáo chỉ dành cho admin.',
          'Cache Redis cho truy vấn báo cáo (TTL 30 phút), chuyển sang memory cache bằng cấu hình; job Quartz nhắc việc và dọn dẹp; Docker Compose sau Nginx.',
        ],
      },
    ],
    skills: [
      { label: 'Backend', items: 'C#, ASP.NET Core Web API, EF Core, Identity, JWT, AutoMapper, Quartz.NET, Serilog' },
      { label: 'Kiến trúc', items: 'Repository Pattern, Clean Architecture, CQRS (đã làm quen), thiết kế phân tầng' },
      { label: 'Dữ liệu & Hạ tầng', items: 'MySQL, Redis, Docker Compose, Nginx, Git / GitHub' },
      { label: 'Frontend (cơ bản)', items: 'React, TypeScript, Vite, Ant Design, Axios, SCSS' },
    ],
    experience: {
      title: 'Trưởng nhóm, đồ án môn Công nghệ phần mềm',
      org: 'Trường Đại học Tiền Giang',
      period: 'Một học kỳ',
      bullets: [
        'Dẫn dắt nhóm sinh viên xây dựng hệ thống quản lý phòng khám; chia việc và phụ trách backend.',
        'Tiếp tục phát triển thành ClinicManagement và đã migrate từ Repository Pattern sang Clean Architecture.',
      ],
    },
    education: {
      school: 'Trường Đại học Tiền Giang',
      degree: 'Cử nhân Công nghệ thông tin, định hướng Phát triển Web',
      period: 'Sinh viên năm 4',
    },
  },
}

/** Where the generated PDFs live (see scripts/build-cv.mjs). */
export const cvFile = (lang: Lang) => `/cv/Huynh-Tan-Chuong-CV-${lang}.pdf`
