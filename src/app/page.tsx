import * as stylex from "@stylexjs/stylex";
import ButtonL2 from "./components/Button";

const style = stylex.create({
  test: {
    color: "red",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(style.test)}>
      <ButtonL2 variant="primary">A button</ButtonL2>
    </div>
  );
}
