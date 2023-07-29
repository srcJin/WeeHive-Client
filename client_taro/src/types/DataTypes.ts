export interface Apairy {
  name: string;
  hives: Hive[];
}

export interface Hive {
  name: string;
  tags: string[];
  weight: DataPoint;
  voice: DataPoint;
  humidity: {
    outside: DataPoint;
    inside: DataPoint;
  };
  temperature: {
    outside: DataPoint;
    inside: DataPoint;
  };
  questions: MCQuestion[];
}

export interface DataPoint {
  value: number;
  unit: string;
}

export interface Question<T> {
  question: string;
  answer: T;
}

export interface MCQuestion extends Question<string> {
  options: string[];
}
