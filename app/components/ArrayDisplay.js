export const ArrayDisplay = ({ 
  array = [], 
  currentIndex = -1, 
  foundIndex = -1,
  searchRange = null 
}) => {
  return (
    <div className="array-display">
      {array.map((value, index) => {
        let className = "array-item";
        
        if (foundIndex === index) {
          className += " found";
        } else if (currentIndex === index) {
          className += " current";
        } else if (searchRange && index >= searchRange.start && index <= searchRange.end) {
          className += " in-range";
        }
        
        return (
          <div key={index} className={className} style={{ display: "inline-block", margin: "0 10px", textAlign: "center" }}>
            <div className="value">{value}</div>
            <div
              style={{
                borderTop: "1px solid black",
                margin: "4px 0",
                width: "100%",
                minWidth: "24px"
              }}
            />
            <div className="index">{index}</div>
          </div>
        );
      })}
    </div>
  );
}