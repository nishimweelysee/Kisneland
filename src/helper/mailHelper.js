import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'intercorep@gmail.com',
    pass: 'iuhrfpghdjixhzzv',
  },
});
