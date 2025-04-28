export class CreateEmployeeDto {
    name: string;
    department: string;
    role: string;
    email: string;
    phone?: string;
    address?: string;
    //skills: string[]; 
  }