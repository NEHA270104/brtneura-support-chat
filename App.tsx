import React, { useState, useEffect } from "react";
import TicketList from "./pages/TicketList";
import TicketDetails from "./pages/TicketDetails";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8000/tickets").then(res => setTickets(res.data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%", borderRight: "1px solid #ccc" }}>
        <h2>Tickets</h2>
        {tickets.map(t => (
          <div key={t.id} onClick={() => setSelected(t.id)} style={{ cursor: "pointer" }}>
            {t.title} - {t.priority}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "1rem" }}>
        {selected ? <TicketDetails ticketId={selected} /> : <p>Select a ticket</p>}
      </div>
    </div>
  );
}

export default App;
