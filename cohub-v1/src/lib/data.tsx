import { Code, Database, MessageSquare } from "lucide-react";

export const tools = [
  {
    id: "eztask",
    name: "EzTask",
    description:
      "A modern task management and collaboration tool for teams of all sizes.",
    icon: <Code className="h-6 w-6 text-primary" />,
    features: [
      "Intuitive interface",
      "Real-time collaboration",
      "Task assignment and tracking",
      "Deadline management ",
    ],
    link: "https://eztask-chi.vercel.app/",
    image: "/Task2.png",
  },
  {
    id: "sprintspace",
    name: "Sprint Space",
    description: "AI-powered codebase Q&A with shared answers.",
    icon: <Database className="h-6 w-6 text-primary" />,
    features: [
      "Contact management",
      "Sync GitHub Repos",
      "AI-Powered Codebase Answers",
      "Save Answers for Teammate",
      "Multi-Project Handling",
    ],
    link: "/tools/crm",
    image: "/Q&A.jpg",
  },
  {
    id: "echoMeet",
    name: "EchoMeet",
    description:
      "A modern chat and meeting web app with an intuitive interface and a built-in collaborative whiteboard for seamless teamwork.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    features: [
      "Real-time Chat & Meetings",
      "Collaborative Whiteboard ",
      "Organized Channels & Threads",
      "Role-based Access Control ",
    ],
    link: "/tools/email",
    image: "/meet.svg",
  },
];
