const products = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    price: 45.99,
    category: "Input Devices",
    description:
      "This mechanical keyboard is designed for both productivity and gaming, offering tactile feedback and a satisfying typing experience. It features durable switches that can withstand millions of keystrokes, ensuring long-term reliability. The keyboard also includes customizable RGB lighting, allowing users to personalize their setup. Its ergonomic layout reduces strain during long sessions, making it ideal for developers, gamers, and everyday users who want both comfort and performance.",
    stock: 12,
    image: "/products/keyboard.jpg",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 19.99,
    category: "Input Devices",
    description:
      "This wireless mouse provides smooth and precise tracking, making it perfect for everyday tasks and professional work. It features an ergonomic design that fits comfortably in the hand, reducing fatigue during extended use. With a long-lasting battery and reliable wireless connectivity, it ensures uninterrupted performance. The compact and lightweight design makes it easy to carry, making it a great option for students, developers, and office users who need convenience and efficiency.",
    stock: 25,
    image: "/products/mouse.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 29.99,
    category: "Input Devices",
    description:
      "Built for performance and precision, this gaming mouse is equipped with adjustable DPI settings and customizable buttons for enhanced control. Its ergonomic shape ensures comfort during long gaming sessions, while the responsive sensors deliver accurate movements. The mouse also features RGB lighting for a stylish look. Whether you are playing competitive games or working on detailed tasks, this device provides the speed and accuracy needed for a seamless experience.",
    stock: 15,
    image: "/products/mouse.jpg",
  },
  {
    id: 4,
    name: "Compact Keyboard",
    price: 34.99,
    category: "Input Devices",
    description:
      "This compact keyboard is designed for users who prefer a minimalist setup without compromising functionality. It offers a sleek and space-saving design that fits perfectly on small desks or portable workstations. Despite its size, it delivers a comfortable typing experience with responsive keys. The keyboard is ideal for developers and students who need a reliable device for coding, writing, and everyday computing tasks while maintaining a clean and organized workspace.",
    stock: 10,
    image: "/products/keyboard.jpg",
  },
  {
    id: 5,
    name: "USB Keyboard",
    price: 14.99,
    category: "Input Devices",
    description:
      "This USB keyboard offers a simple and reliable solution for everyday typing needs. It features a plug-and-play design, allowing users to connect it instantly without additional setup. The keys are soft and quiet, providing a comfortable typing experience for long periods. Built with durability in mind, it is suitable for both home and office use. Its straightforward functionality makes it a great choice for users looking for affordability and dependability.",
    stock: 30,
    image: "/products/keyboard.jpg",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 22.99,
    category: "Accessories",
    description:
      "This adjustable laptop stand is designed to improve posture and reduce strain during long working hours. It elevates your laptop to eye level, helping to prevent neck and back discomfort. The sturdy construction ensures stability, while the open design promotes better airflow to keep your device cool. It is lightweight and portable, making it ideal for both home and office setups. This stand is perfect for developers and students seeking comfort and productivity.",
    stock: 18,
    image: "/products/accessories.jpg",
  },
  {
    id: 7,
    name: "Mouse Pad",
    price: 9.99,
    category: "Accessories",
    description:
      "This high-quality mouse pad provides a smooth surface for precise and consistent tracking. It is designed to enhance the performance of both optical and laser mice, ensuring accuracy during work or gaming. The non-slip base keeps it securely in place, preventing unwanted movement. Its durable material ensures long-lasting use, while the comfortable texture supports extended usage. This mouse pad is an essential accessory for anyone looking to improve their workspace setup.",
    stock: 40,
    image: "/products/accessories.jpg",
  },
  {
    id: 8,
    name: "Keyboard Cover",
    price: 7.99,
    category: "Accessories",
    description:
      "This keyboard cover is designed to protect your device from dust, spills, and everyday wear. Made from flexible and durable material, it fits snugly over your keyboard without affecting typing performance. It is easy to clean and maintain, ensuring your keyboard stays in good condition for longer. Ideal for both home and office environments, this accessory provides an extra layer of protection while maintaining a clean and professional appearance.",
    stock: 35,
    image: "/products/accessories.jpg",
  },
  {
    id: 9,
    name: "Cable Organizer",
    price: 11.99,
    category: "Accessories",
    description:
      "Keep your workspace neat and organized with this practical cable organizer. It helps manage multiple cables, preventing tangling and clutter on your desk. The compact design makes it easy to use in various environments, including home offices and workstations. Built with durable materials, it ensures long-lasting performance. This organizer is perfect for developers and tech enthusiasts who want a clean and efficient workspace without the hassle of messy cables.",
    stock: 22,
    image: "/products/accessories.jpg",
  },
  {
    id: 10,
    name: "USB Hub",
    price: 16.99,
    category: "Accessories",
    description:
      "This USB hub expands your device’s connectivity by providing multiple ports for various peripherals. It supports fast data transfer speeds, making it ideal for connecting keyboards, mice, flash drives, and other accessories. The compact and lightweight design makes it easy to carry, while the durable construction ensures reliability. Whether you are working on a laptop or desktop, this hub offers a convenient solution for managing multiple devices efficiently.",
    stock: 20,
    image: "/products/accessories.jpg",
  },
  {
    id: 11,
    name: "Over-Ear Headphones",
    price: 39.99,
    category: "Audio",
    description:
      "These over-ear headphones are designed to deliver immersive sound quality with deep bass and clear highs. The cushioned ear cups provide excellent comfort, making them suitable for long listening sessions whether you are working, studying, or relaxing. The adjustable headband ensures a secure fit, while the durable build guarantees long-term use. Ideal for music lovers and professionals, these headphones combine performance and comfort in a sleek and modern design.",
    stock: 14,
    image: "/products/headphones.jpg",
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    price: 29.99,
    category: "Audio",
    description:
      "These wireless earbuds offer a compact and convenient audio solution with high-quality sound and reliable connectivity. Designed for portability, they come with a charging case that extends battery life and keeps them protected. The earbuds feature touch controls for easy operation and a comfortable fit for extended use. Whether you are commuting, exercising, or working, they provide a seamless and enjoyable listening experience without the hassle of cables.",
    stock: 28,
    image: "/products/headphones.jpg",
  },
  {
    id: 13,
    name: "Gaming Headset",
    price: 49.99,
    category: "Audio",
    description:
      "This gaming headset is built for immersive gameplay, offering surround sound and a noise-canceling microphone for clear communication. The comfortable ear cushions and adjustable headband make it suitable for long gaming sessions. Its durable construction ensures reliability, while the stylish design adds to your gaming setup. Whether you are playing competitively or casually, this headset enhances your experience by delivering precise audio and clear voice communication.",
    stock: 16,
    image: "/products/headphones.jpg",
  },
  {
    id: 14,
    name: "Studio Headphones",
    price: 59.99,
    category: "Audio",
    description:
      "These studio headphones are engineered for accurate sound reproduction, making them ideal for music production, editing, and professional use. They provide a balanced audio profile that allows you to hear every detail clearly. The comfortable design ensures they can be worn for extended periods without discomfort. Built with high-quality materials, they are both durable and reliable. Perfect for creators and audio professionals who demand precision and clarity.",
    stock: 8,
    image: "/products/headphones.jpg",
  },
  {
    id: 15,
    name: "Portable Speaker",
    price: 24.99,
    category: "Audio",
    description:
      "This portable speaker delivers powerful sound in a compact and lightweight design, making it easy to carry wherever you go. It features Bluetooth connectivity for seamless pairing with your devices and a long-lasting battery for extended playback. The durable build makes it suitable for both indoor and outdoor use. Whether you are hosting a small gathering or enjoying music on the go, this speaker provides clear and reliable audio performance.",
    stock: 21,
    image: "/products/headphones.jpg",
  },
  {
    id: 16,
    name: "Fast Charger",
    price: 14.99,
    category: "Power & Charging",
    description:
      "This fast charger is designed to quickly power up your devices, saving you time and ensuring efficiency. It supports multiple charging standards, making it compatible with a wide range of smartphones and gadgets. The compact design makes it easy to carry, while built-in safety features protect against overheating and overcharging. Ideal for daily use, this charger is perfect for users who need reliable and fast charging performance at home or on the go.",
    stock: 50,
    image: "/products/charger.jpg",
  },
  {
    id: 17,
    name: "Power Bank",
    price: 19.99,
    category: "Power & Charging",
    description:
      "This power bank provides a portable solution for keeping your devices charged wherever you are. With a high-capacity battery, it can recharge your smartphone multiple times on a single charge. Its compact and lightweight design makes it easy to carry in your bag or pocket. Equipped with multiple ports, it allows you to charge more than one device simultaneously. This power bank is perfect for travel, work, and everyday use.",
    stock: 32,
    image: "/products/charger.jpg",
  },
  {
    id: 18,
    name: "USB Cable",
    price: 6.99,
    category: "Power & Charging",
    description:
      "This durable USB cable is designed for both fast charging and reliable data transfer. Made with high-quality materials, it resists wear and tear from daily use. The flexible design prevents tangling, making it easy to store and carry. Compatible with a wide range of devices, it is an essential accessory for connecting and powering your gadgets. Whether at home or on the go, this cable ensures consistent and efficient performance.",
    stock: 60,
    image: "/products/charger.jpg",
  },
  {
    id: 19,
    name: "Wireless Charger",
    price: 21.99,
    category: "Power & Charging",
    description:
      "This wireless charger offers a convenient way to power your devices without the need for cables. Simply place your compatible device on the pad to begin charging instantly. It features a sleek and modern design that fits well on any desk or workspace. Built-in safety mechanisms protect against overheating and overcharging. Ideal for users who value convenience and a clutter-free setup, this charger simplifies the charging experience.",
    stock: 26,
    image: "/products/charger.jpg",
  },
  {
    id: 20,
    name: "Charging Station",
    price: 34.99,
    category: "Power & Charging",
    description:
      "This charging station allows you to power multiple devices simultaneously, making it perfect for households and workspaces with many gadgets. It keeps your devices organized while reducing cable clutter. Designed with efficiency in mind, it delivers consistent power to each connected device. The sturdy build ensures durability, while the compact design saves space. This station is ideal for users who need a centralized and reliable charging solution.",
    stock: 12,
    image: "/products/charger.jpg",
  },
  {
    id: 21,
    name: "Programming Book",
    price: 18.99,
    category: "Learning Resources",
    description:
      "This programming book is designed for beginners who want to learn the fundamentals of coding. It covers essential concepts in a clear and structured way, making it easy to follow along. With practical examples and exercises, it helps reinforce understanding and build confidence. Whether you are a student or someone starting a new career in tech, this book provides a solid foundation for learning programming effectively.",
    stock: 40,
    image: "/products/book.jpg",
  },
  {
    id: 22,
    name: "JavaScript Guide",
    price: 20.99,
    category: "Learning Resources",
    description:
      "This comprehensive JavaScript guide covers everything from basic syntax to advanced concepts, making it suitable for learners at different levels. It includes real-world examples and projects that help you apply what you learn. The structured approach ensures steady progress while building practical skills. Ideal for aspiring web developers, this guide is a valuable resource for mastering one of the most important programming languages in modern development.",
    stock: 30,
    image: "/products/book.jpg",
  },
  {
    id: 23,
    name: "Algorithm Book",
    price: 25.99,
    category: "Learning Resources",
    description:
      "This algorithm book provides an in-depth look at problem-solving techniques and data structures. It explains complex topics in a simplified manner, making them easier to understand. With numerous examples and exercises, it helps improve logical thinking and coding skills. Ideal for students and developers preparing for interviews, this book is a valuable resource for mastering algorithms and improving overall programming efficiency.",
    stock: 18,
    image: "/products/book.jpg",
  },
  {
    id: 24,
    name: "Online Course",
    price: 15.99,
    category: "Learning Resources",
    description:
      "This online course offers an interactive way to learn web development through hands-on projects and guided lessons. It covers essential topics such as HTML, CSS, and JavaScript, providing a complete learning experience. The course is designed to be flexible, allowing you to learn at your own pace. Ideal for beginners and intermediate learners, it helps build practical skills that can be applied to real-world projects.",
    stock: 50,
    image: "/products/software.jpg",
  },
  {
    id: 25,
    name: "Coding Software",
    price: 12.99,
    category: "Learning Resources",
    description:
      "This coding software provides a lightweight and efficient environment for writing and testing code. It includes essential features such as syntax highlighting, debugging tools, and customizable settings to enhance productivity. Suitable for both beginners and experienced developers, it offers a smooth and user-friendly experience. Whether you are working on small projects or large applications, this software supports your development workflow effectively.",
    stock: 27,
    image: "/products/software.jpg",
  },
];

export default products;
