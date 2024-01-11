import * as stylex from "@stylexjs/stylex";

const style = stylex.create({
  test: {
    color: "red",
  },
});

export default function Home() {
  return <div {...stylex.props(style.test)}>dev</div>;
}
