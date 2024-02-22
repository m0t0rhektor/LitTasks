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
    button:hover {
      color: green;
    }
  `;
  constructor() {
    super();
    this.tasks = [];
  }

  addTask(event: Event) {
    event?.preventDefault();
    const task = this.shadowRoot?.getElementById("taskInput") as HTMLInputElement;
    this.tasks.push(task.value);
    task.value = '';
    this.requestUpdate();  }
  render() {
    return html`
        <div>
            <p>Insert a Task</p>
            <form @submit=${this.addTask}>
            <input id="taskInput" type="text"></label>
            <button type="submit">Add Task</button>      
            </form>

            <p>Your Tasks: </p>
            ${this.tasks.map(task => html`<p>${task}</p>`)}


        </div>
        `;
  }
}
