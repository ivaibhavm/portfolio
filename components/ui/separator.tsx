import HorizontalLine from "./horizontalLine";

const Separator = () => {
  return (
    <div>
      <HorizontalLine />
      <div className="h-8 bg-dots inset-x-0 -mx-4"></div>
      <HorizontalLine />
    </div>
  );
};

export default Separator;
