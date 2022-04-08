import specials from "./Welcome.module.css";

const Welcome = (props: { onAdvance: () => void }) => {
  return (
    <div className={specials.Overlay} onClick={props.onAdvance}>
      <div className={specials.Text}>Welcome</div>
    </div>
  );
};

export default Welcome;
