import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class OtpService {
  private otps = new Map<string, string>();

  async sendOtp(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otps.set(email, otp);

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: {
        user: 'postmaster@sandboxc21a7c0cbe0b471e96c5b19d5db131a6.mailgun.org', 
        pass: 'b1ab77b2ccfcde6e5bece9a1fadfef1a-67bd41c2-7fddacb9',
      },
    });

    await transporter.sendMail({
      from: '"NextPhase App" <postmaster@sandboxc21a7c0cbe0b471e96c5b19d5db131a6.mailgun.org>', 
      to: email,
      subject: 'OTP for Password Change',
      text: `Your OTP is ${otp}`,
    });

    return { message: 'OTP sent to email' };
  }

  verifyOtp(email: string, otp: string): boolean {
    return this.otps.get(email) === otp;
  }

  clearOtp(email: string) {
    this.otps.delete(email);
  }
}
