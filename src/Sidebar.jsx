import React from "react";

const SidebarItem = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div style={{ marginLeft: "15px", padding: "5px 0" }}>
      <div>{item.title}</div>
      {hasChildren && (
        <div style={{ marginLeft: "10px" }}>
          {item.children.map((child, idx) => (
            <SidebarItem key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ tree }) => {
  return (
    <div style={{ width: "250px", backgroundColor: "#111", color: "#fff", padding: "10px", height: "100vh" }}>
      {tree.children.map((item, idx) => (
        <SidebarItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
