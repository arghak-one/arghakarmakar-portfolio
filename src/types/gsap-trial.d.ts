declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: any[];
    words: any[];
    lines: any[];
    constructor(target: any, vars?: Record<string, any>);
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(position: number): void;
    paused(state: boolean): void;
    scrollTo(target: string | Element | null, smooth?: boolean, position?: string): void;
  }
}
