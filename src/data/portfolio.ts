export const greeting = {
  name: "Huỳnh Tấn Chương",
  nickname: "jin3107",
  subtitle:
    "Sinh viên CNTT năm 4, đam mê Backend Development. Đang học hỏi và rèn luyện thêm với ASP.NET Core, React, cũng như cách sử dụng AI agent hiệu quả và có trách nhiệm trong quy trình phát triển phần mềm.",
  githubProfile: "https://github.com/jin3107",
};

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/jin3107",
    color: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hu%E1%BB%B3nh-t%E1%BA%A5n-ch%C6%B0%C6%A1ng-7b80242b2/",
    color: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:tanchuonghuynh3@gmail.com",
    color: "#D14836",
  },
];

export type Skill = {
  title: string;
  highlight: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    title: "Backend Development",
    highlight:
      "Xây dựng REST API với ASP.NET Core (.NET 8), làm quen với Repository Pattern, CQRS và đang chuyển dần một số dự án sang Clean Architecture.",
    tags: ["C#", "ASP.NET Core", "EF Core", "MySQL", "JWT"],
  },
  {
    title: "Frontend Development",
    highlight:
      "Xây dựng giao diện với React 18 + TypeScript, dùng Vite làm build tool, Ant Design cho UI component.",
    tags: ["React", "TypeScript", "Vite", "Axios", "SCSS"],
  },
  {
    title: "DevOps & Hạ tầng",
    highlight:
      "Đóng gói và triển khai ứng dụng với Docker Compose, Nginx làm reverse proxy, Redis cho caching.",
    tags: ["Docker", "Nginx", "Redis", "Git"],
  },
];

export const education = {
  school: "Trường Đại học Tiền Giang",
  subtitle: "Công nghệ thông tin - Định hướng Phát triển Web",
  duration: "Sinh viên năm 4",
  link: "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ti%E1%BB%81n+Giang/@10.3654289,106.3569144,18z",
};

export const experience = {
  title: "Trưởng nhóm - Đồ án môn Công nghệ phần mềm",
  company: "Trường Đại học Tiền Giang",
  duration: "Học kỳ môn Công nghệ phần mềm",
  description:
    "Dẫn dắt một nhóm sinh viên xây dựng đồ án quản lý phòng khám (tiền thân của dự án QuanLyPhongKham), phụ trách chính phần backend. Hiện đang tiếp tục migrate dự án từ Repository Pattern sang Clean Architecture.",
};

export const contact = {
  title: "Muốn trao đổi công việc hoặc dự án?",
  description:
    "Bạn có thể liên hệ với tôi qua GitHub, LinkedIn hoặc Gmail bên dưới. Tôi sẽ cố gắng phản hồi sớm nhất có thể.",
  email: "tanchuonghuynh3@gmail.com",
  address: {
    title: "Nơi tôi đang học tập",
    subtitle: "Trường Đại học Tiền Giang, TP. Mỹ Tho, Tiền Giang",
    mapLink:
      "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ti%E1%BB%81n+Giang/@10.3654289,106.3569144,18z",
  },
};
