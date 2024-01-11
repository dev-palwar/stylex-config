import * as stylex from "@stylexjs/stylex";

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
  return <div {...stylex.props(style.test)}>dev</div>;
}
