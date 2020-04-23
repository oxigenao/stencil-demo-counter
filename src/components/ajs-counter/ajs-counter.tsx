import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Watch,
  EventEmitter,
  Event,
} from "@stencil/core";

@Component({
  tag: "ajs-counter",
  styleUrl: "ajs-counter.scss",
  shadow: true,
})
export class AjsCounter implements ComponentInterface {
  @Prop() initValue = 0;
  @State() actualValue = 0;
  @Event() counterValueChange: EventEmitter;

  componentWillLoad() {
    this.actualValue = this.initValue;
  }

  @Watch("initValue") initValueHandler(newValue, oldValue) {
    if (newValue != oldValue) this.actualValue = newValue;
  }

  countUp() {
    this.actualValue += 1;
    this.counterValueChange.emit(this.actualValue);
  }
  countDown() {
    this.actualValue -= 1;
    this.counterValueChange.emit(this.actualValue);
  }

  render() {
    return (
      <Host class="aljs-counter-class">
        {/* <h3 class="title">Valor inicial {this.initValue}</h3> */}
        <div class="counter-container">
          <button
            onClick={() => {
              this.countDown();
            }}
          >
            😥
          </button>
          <div class="counter-content">
            <p>
              <slot></slot>
              {this.actualValue}
            </p>
          </div>
          <button
            onClick={() => {
              this.countUp();
            }}
          >
            😃
          </button>
        </div>
      </Host>
    );
  }
}
