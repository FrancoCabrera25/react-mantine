import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import classes from './Toolbar.module.css';
const data = ['React', 'Vue', 'Angular', 'Svelte'];
const Toolbar = () => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
    const [active, setActive] = useState(0);
  
    const setControlRef = (index: number) => (node: HTMLButtonElement) => {
      controlsRefs[index] = node;
      setControlsRefs(controlsRefs);
    };
  
    const controls = data.map((item, index) => (
      <UnstyledButton
        key={item}
        className={classes.control}
        ref={setControlRef(index)}
        onClick={() => setActive(index)}
        mod={{ active: active === index }}
      >
        <span className={classes.controlLabel}>{item}</span>
      </UnstyledButton>
    ));
  
    return (
      <div className={classes.root} ref={setRootRef} hidden>
        {controls}
  
        <FloatingIndicator
          target={controlsRefs[active]}
          parent={rootRef}
          className={classes.indicator}
        />
      </div>
    );
}

export default Toolbar
