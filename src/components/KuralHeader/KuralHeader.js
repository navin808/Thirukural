import './KuralHeader.css';

function KuralHeader({ title, ...props }) {
  return (
    <p className="kural-title">
        <b>{title}</b>
        {props.children}
    </p>
  );
}

export default KuralHeader;
