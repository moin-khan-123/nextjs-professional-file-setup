// Global type definitions

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'freelancer' | 'admin';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  freelancerId?: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  budget: number;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
