export type Lang = 'vi' | 'en'

export type Translation = {
  nav: { home: string; projects: string; contact: string }
  greeting: { name: string; nickname: string; subtitle: string }
  skills: { title: string; highlight: string; tags: string[] }[]
  education: { school: string; subtitle: string; duration: string; label: string }
  experience: { title: string; company: string; duration: string; description: string; label: string }
  contact: {
    title: string
    description: string
    addressTitle: string
    addressSubtitle: string
    emailLabel: string
    sendEmail: string
    socialLabel: string
  }
  projects: {
    header: string
    description: string
    wip: string
    noDescription: string
    loadError: string
    loadErrorSuffix: string
    languagesTitle: string
    totalStars: string
    totalForks: string
    totalRepos: string
  }
  githubStats: { memberSince: string }
}

export const translations: Record<Lang, Translation> = {
  vi: {
    nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
    greeting: {
      name: 'Huỳnh Tấn Chương',
      nickname: 'jin3107',
      subtitle:
        'Sinh viên CNTT năm 4, đam mê Backend Development. Đang học hỏi và rèn luyện thêm với ASP.NET Core, React, cũng như cách sử dụng AI agent hiệu quả và có trách nhiệm trong quy trình phát triển phần mềm.',
    },
    skills: [
      {
        title: 'Backend Development',
        highlight:
          'Xây dựng REST API với ASP.NET Core (.NET 8), làm quen với Repository Pattern, CQRS và đang chuyển dần một số dự án sang Clean Architecture.',
        tags: ['C#', 'ASP.NET Core', 'EF Core', 'MySQL', 'JWT'],
      },
      {
        title: 'Frontend (cơ bản)',
        highlight:
          'Tự dựng được giao diện bằng React + TypeScript, đủ dùng cho dự án cá nhân. Không phải thế mạnh chính, trọng tâm của tôi vẫn là Backend.',
        tags: ['React', 'TypeScript', 'Vite', 'Axios', 'SCSS'],
      },
      {
        title: 'DevOps & Hạ tầng',
        highlight:
          'Đóng gói và triển khai ứng dụng với Docker Compose, Nginx làm reverse proxy, Redis cho caching.',
        tags: ['Docker', 'Nginx', 'Redis', 'Git'],
      },
    ],
    education: {
      school: 'Trường Đại học Tiền Giang',
      subtitle: 'Công nghệ thông tin - Định hướng Phát triển Web',
      duration: 'Sinh viên năm 4',
      label: '🎓 Học vấn',
    },
    experience: {
      title: 'Trưởng nhóm - Đồ án môn Công nghệ phần mềm',
      company: 'Trường Đại học Tiền Giang',
      duration: 'Học kỳ môn Công nghệ phần mềm',
      description:
        'Dẫn dắt một nhóm sinh viên xây dựng đồ án quản lý phòng khám (tiền thân của dự án QuanLyPhongKham), phụ trách chính phần backend. Hiện đang tiếp tục migrate dự án từ Repository Pattern sang Clean Architecture.',
      label: '🧑‍💻 Kinh nghiệm',
    },
    contact: {
      title: 'Muốn trao đổi công việc hoặc dự án?',
      description:
        'Bạn có thể liên hệ với tôi qua GitHub, LinkedIn hoặc Gmail bên dưới. Tôi sẽ cố gắng phản hồi sớm nhất có thể.',
      addressTitle: 'Nơi tôi đang học tập',
      addressSubtitle: 'Trường Đại học Tiền Giang, TP. Mỹ Tho, Tiền Giang',
      emailLabel: 'Email',
      sendEmail: 'Gửi email',
      socialLabel: 'Mạng xã hội',
    },
    projects: {
      header: 'Dự án trên GitHub',
      description: 'Một số repository gần đây của tôi, chủ yếu xoay quanh ASP.NET Core + React.',
      wip: '🚧 Đang phát triển',
      noDescription: 'Chưa có mô tả.',
      loadError: 'Không tải được danh sách dự án, ghé',
      loadErrorSuffix: 'trực tiếp nhé.',
      languagesTitle: 'Ngôn ngữ dùng nhiều nhất',
      totalStars: 'Tổng Stars',
      totalForks: 'Tổng Forks',
      totalRepos: 'Số dự án',
    },
    githubStats: { memberSince: 'Trên GitHub từ' },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
    greeting: {
      name: 'Huynh Tan Chuong',
      nickname: 'jin3107',
      subtitle:
        '4th-year IT student, passionate about Backend Development. Currently learning and practicing with ASP.NET Core, React, and how to use AI agents effectively and responsibly in the software development workflow.',
    },
    skills: [
      {
        title: 'Backend Development',
        highlight:
          'Building REST APIs with ASP.NET Core (.NET 8), familiar with Repository Pattern, CQRS, and gradually migrating some projects to Clean Architecture.',
        tags: ['C#', 'ASP.NET Core', 'EF Core', 'MySQL', 'JWT'],
      },
      {
        title: 'Frontend (basics)',
        highlight:
          'Able to build UIs with React + TypeScript, enough for personal projects. Not my main strength — my focus remains Backend.',
        tags: ['React', 'TypeScript', 'Vite', 'Axios', 'SCSS'],
      },
      {
        title: 'DevOps & Infrastructure',
        highlight:
          'Packaging and deploying applications with Docker Compose, Nginx as reverse proxy, Redis for caching.',
        tags: ['Docker', 'Nginx', 'Redis', 'Git'],
      },
    ],
    education: {
      school: 'Tien Giang University',
      subtitle: 'Information Technology - Web Development track',
      duration: '4th-year student',
      label: '🎓 Education',
    },
    experience: {
      title: 'Team Lead - Software Engineering Course Project',
      company: 'Tien Giang University',
      duration: 'Software Engineering course term',
      description:
        'Led a student team building a clinic management project (predecessor of the QuanLyPhongKham project), mainly responsible for the backend. Currently migrating the project from Repository Pattern to Clean Architecture.',
      label: '🧑‍💻 Experience',
    },
    contact: {
      title: 'Want to talk about work or a project?',
      description:
        'You can reach me via GitHub, LinkedIn or Gmail below. I will try to respond as soon as possible.',
      addressTitle: 'Where I study',
      addressSubtitle: 'Tien Giang University, My Tho City, Tien Giang',
      emailLabel: 'Email',
      sendEmail: 'Send email',
      socialLabel: 'Social',
    },
    projects: {
      header: 'GitHub Projects',
      description: 'Some of my recent repositories, mostly around ASP.NET Core + React.',
      wip: '🚧 Work in progress',
      noDescription: 'No description yet.',
      loadError: 'Failed to load the project list, check',
      loadErrorSuffix: 'directly instead.',
      languagesTitle: 'Most Used Languages',
      totalStars: 'Total Stars',
      totalForks: 'Total Forks',
      totalRepos: 'Repos',
    },
    githubStats: { memberSince: 'On GitHub since' },
  },
}
