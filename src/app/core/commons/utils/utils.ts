import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class Utils {

  static camelCase(key: string): string {
    return key.replace(/(_\w)/g, (match) => match[1].toUpperCase());
  }

  static onlyNumber(value: string): string {
    const numbers = value.match(/\d+/g);
    return numbers ? numbers.join('') : '';
  }

  static formatPhoneNumber(phoneNumber: string): string {
    const number = phoneNumber.replace(/\D/g, '');
    return number.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
  }

  static snakeCase(key: string): string {
    return key.replace(/[\w]([A-Z])/g, (match) => `${match[0]}_${match[1]}`).toLowerCase();
  }

  static isEmpty(value: unknown): boolean {
    return value == null || value === '' || (Array.isArray(value) && value.length === 0);
  }

  static toBoolean(value: string): boolean {
    return value.toLowerCase() === 'true';
  }

  static replaceToEmpty(value: string, match: string): string {
    return value.replace(match, '');
  }

  static objectToString(messages: Record<string, unknown>): string[] {
    return Object.values(messages).map((message) => String(message));
  }

  static getBasename(path: string, withExtension = true): string {
    const basename = path.split('/').pop() || '';
    return withExtension ? basename : basename.split('.')[0];
  }

  static getExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  static getType(mimeType: string): string {
    const map = new Map<string, string>([
      ['application/pdf', 'pdf'],
      ['application/xml', 'xml'],
      ['text/plain', 'txt'],
      ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'docx'],
      ['application/msword', 'doc'],
      ['image/png', 'png'],
      ['image/jpeg', 'jpg'],
      ['image/gif', 'gif'],
      ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx'],
      ['application/vnd.ms-excel', 'xls'],
      ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'pptx'],
      ['application/vnd.ms-powerpoint', 'ppt'],
    ]);

    return map.get(mimeType.toLowerCase()) || 'unknown';
  }

  static shortName(fullName: string): string {
    const names = fullName.trim().split(' ');
    return names.length > 1
      ? `${names[0]} ${names[1][0].toUpperCase()}.`
      : fullName;
  }

  static isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
      navigator.userAgent
    );
  }

  static ucFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  static formatCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  static formatCnpj(cnpj: string): string {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  static formatCep(cep: string): string {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  static mixColors(firstColor: string, secondColor: string, intensity: number): string {
    const hex1 = parseInt(firstColor.slice(1), 16);
    const hex2 = parseInt(secondColor.slice(1), 16);

    const r = Math.round(((hex1 >> 16) * (1 - intensity)) + ((hex2 >> 16) * intensity));
    const g = Math.round((((hex1 >> 8) & 0xff) * (1 - intensity)) + (((hex2 >> 8) & 0xff) * intensity));
    const b = Math.round(((hex1 & 0xff) * (1 - intensity)) + ((hex2 & 0xff) * intensity));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
}
