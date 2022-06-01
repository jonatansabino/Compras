import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
 
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Arroz',
      subject: 'Arroz Integral Tipo 1 5KG',      
      id: 0,
      read: false
    },
    {
      fromName: 'Feijão',
      subject: 'Feijão Carioca 1 KG',
      id: 1,
      read: false
    },
    {
      fromName: 'Batata Frita',
      subject: 'Batata Frita Congelada 2 KG',
      id: 2,
      read: false
    },
    {
      fromName: 'Molho de Tomate',
      subject: 'Molho de Tomate 500g',
      id: 3,
      read: false
    },
    {
      fromName: 'Cerveja',
      subject: 'Cerveja Amstel 265ml',
      id: 4,
      read: false
    },
    {
      fromName: 'File de Frango',
      subject: 'Pacote File de Franco Congelado 1 KG',
      id: 5,
      read: false
    },
    {
      fromName: 'Hamburguer',
      subject: 'Caixa de Hamburguer com 36 un',
      id: 6,
      read: false
    },
    {
      fromName: 'Manteiga',
      subject: 'Manteiga Vigor c/ sal 500g',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
