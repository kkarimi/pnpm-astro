export function Button(props: any) {
  console.log('my feature');
  return <button onClick={() => {
    props.onClick ?? console.log('no click handler')
  }}>{props.children}</button>;
}

export default Button;
