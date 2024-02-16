type cardProps = {
  title: string;
  bookingCount: number;
  //   growth: number;
};

const Card = (props: cardProps) => {
  return (
    <div className="bg-white p-5 w-50 rounded-xl">
      <h3>{props.title}</h3>
      <h1>{props.bookingCount}</h1>
    </div>
  );
};

export default Card;
