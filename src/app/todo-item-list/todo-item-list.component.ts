import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { TextGenerationService } from '../text-generation.service';
import * as marked from 'marked';
@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrl: './todo-item-list.component.css',
})
export class TodoItemListComponent implements OnInit {
  result: string = `
### 学习前端test的编写，前端测试工具的使用 这是一个非常棒的目标！学习如何编写前端测试是非常重要的，它可以帮助你确保代码的质量和稳定性。以下是一些常用的前端测试工具和技术： 1. **Jest**：一个非常流行的JavaScript测试框架，支持单元测试、集成测试和端到端测试。它内置了断言库、模拟功能和覆盖率报告。 2. **Mocha**：另一个广泛使用的JavaScript测试框架，通常与Chai（断言库）和Sinon（模拟库）一起使用。 3. **Cypress**：一个现代的端到端测试工具，非常适合测试Web应用的用户界面。它提供了强大的调试和可视化工具。 4. **Testing Library**：一组用于测试React、Vue、Angular等框架的库，专注于模拟用户的实际行为，而不是直接测试实现细节。 你可以从这些工具中选择一个开始学习，并逐渐扩展你的测试技能。如果你是初学者，我建议从Jest和Testing Library开始，因为它们的文档和支持都非常好。 ### 配置Windows像oh my zsh一样酷炫的命令行 在Windows上配置一个酷炫的命令行环境是一个很好的想法！以下是一些建议： 1. **Windows Terminal**：这是微软官方推出的一个现代化的终端应用程序，支持多标签页、自定义主题和丰富的插件生态系统。 2. **PowerShell 7+**：PowerShell是一个强大的脚本语言和命令行工具，最新版本支持跨平台，并且有很多新特性。 3. **Oh My Posh**：这是一个类似于Oh My Zsh的工具，可以让你在Windows上拥有漂亮的提示符和主题。 4. **Starship**：这是一个跨平台的shell提示符，支持多种shell（包括PowerShell），并且有很多可定制的选项。 你可以通过以下步骤来设置： - 安装Windows Terminal - 安装PowerShell 7+ - 安装Oh My Posh或Starship，并选择你喜欢的主题 这样，你的Windows命令行就会变得既酷炫又实用！ ### 9-11pm，攀岩 攀岩是一个很好的运动，不仅能锻炼身体，还能提升心理素质。希望你在攀岩时能享受其中的乐趣，并保持安全！如果你是初学者，记得找一位经验丰富的教练指导，确保你的技术和装备都是正确的。加油！ ### 吃早饭（今天不能不吃了） 吃早饭真的很重要，它能为你的一天提供能量。如果你经常忘记吃早饭，可以试试提前准备一些简单的早餐，比如燕麦粥、水果或者酸奶。这样早上起来只需要几分钟就能搞定一顿营养丰富的早餐。希望你今天能好好享受早餐，为一天的工作和活动做好准备！ 加油，祝你今天一切顺利！`;
  get formattedResult() {
    return marked
      .parse(this.result.replace('###', ' '));
  };
  constructor(
    private itemService: ItemService,
    private location: Location,
    private apiService: TextGenerationService
  ) {}

  get todoItems() {
    const filter = this.location.path().split('/')[1] || 'all';
    console.log('11111', filter);

    this.itemService.setItemsFilter(filter);
    return this.itemService.displayItems;
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.itemService.setData(data);
        console.log('get data!', data);
      },
      (error: HttpErrorResponse) => {
        console.log(error, error.error?.message, error.message);
      }
    );
  }

  onSetDone(setDoneId: string) {
    let item = this.itemService.displayItems.find((x) => x.id == setDoneId);
    item!.done = !item?.done;
    this.itemService.updateItem(item!).subscribe(
      (data: Item) => {
        console.log('Item updated successfully:', data);
        this.itemService.getItems().subscribe(
          (data) => {
            this.itemService.setData(data);
          },
          (error: HttpErrorResponse) => {
            console.log(error, error.error?.message, error.message);
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log('Item updated  response error');
        console.log(error);
      }
    );
  }

  onRemove(removeId: string) {
    this.itemService.deleteItem(removeId).subscribe(
      () => {
        this.itemService.getItems().subscribe(
          (data) => {
            this.itemService.setData(data);
            console.log('get data!', data);
          },
          (error: HttpErrorResponse) => {
            console.log(error, error.error?.message, error.message);
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log('Delete failed', error.error?.message, error.message);
      }
    );
  }

  sendTodoItems() {
    const todoItemsString = this.todoItems
      .map((item) => item.description)
      .join('\n');
    this.apiService.generateContent(todoItemsString).subscribe(
      (data) => {
        this.result = data;
      },
      (error) => {
        console.log('!!' + error);
      }
    );
  }
}
