import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../env';

interface TextGenerationResponse {
  output: {
    choices: [
      {
        finish_reason: string;
        message: {
          role: string;
          content: string;
        };
      }
    ];
  };
  usage: {
    total_tokens: number;
    output_tokens: number;
    input_tokens: number;
  };
  request_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class TextGenerationService {
  private apiUrl = environment.genApiUrl;
  private apiKey = environment.apiKey;
  private prompt = environment.prompt;

  constructor(private http: HttpClient) {}

  // 定义方法并只返回 content 字段
  generateContent(userInput: string): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      model: 'qwen-max',
      input: {
        messages: [
          {
            role: 'system',
            content:
              this.prompt
          },
          { content: userInput, role: 'user' },
        ],
      },
      parameters: {
        temperature: 0.8,
        seed: 12360,
        result_format: 'message',
      },
    };

    // 使用 map 操作符从响应中提取 content 字段
    return this.http
      .post<TextGenerationResponse>(this.apiUrl, body, { headers })
      .pipe(map((response) => response.output.choices[0].message.content));
  }
}
