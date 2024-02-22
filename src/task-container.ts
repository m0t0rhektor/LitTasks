import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("task-container")
export class TaskContainer extends LitElement {
  @property({ type: Array })
  tasks: string[] = [];
  static styles = css`
    div {
      text-align: center;
      color: green;
    }
    button.remove {
      background-color: transparent;
      border: none;
      color: red;
      font-size: 1.2em;
      cursor: pointer;
    }
    button.remove:hover {
      color: darkred;
    }
  `;
  constructor() {
    super();
    this.tasks = [];
  }

  addTask(event: Event) {
    event?.preventDefault();
    const task = this.shadowRoot?.getElementById(
      "taskInput"
    ) as HTMLInputElement;
    this.tasks.push(task.value);
    task.value = "";
    this.requestUpdate();
  }
  removeTask(target: string) {
    var index = this.tasks.findIndex((task) => task === target);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.requestUpdate();
  }
  render() {
    return html`
        <div>
            <p>Insert a Task</p>
            <form @submit=${this.addTask}>
            <input id="taskInput" type="text"></label>
            <button type="submit">Add Task</button>      
            </form>

            <p>Your Tasks: </p>
            ${this.tasks.map(
              (task) => html` <div>
                <span>${task}</span>
                <button class="remove" @click=${() => this.removeTask(task)}>
                  X
                </button>
              </div>`
            )}


        </div>
        `;
  }
}
