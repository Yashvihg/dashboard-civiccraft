type listElementProps = {
  elementName: string;
  iconName: string;
};

const ListElement = (props: listElementProps) => {
  return (
    <li className="flex items-center justify-start p-3 text-primary-black">
      <i className={"fi " + props.iconName + " pr-2 text-xl"}></i>
      <p className="pb-1">{props.elementName}</p>
    </li>
  );
};

export default ListElement;
