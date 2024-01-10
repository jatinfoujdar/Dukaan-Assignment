import React from 'react';

const Price = () => {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              #218209
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              7 July 2023
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              ₹1,287.32
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              ₹22
            </th>
          </tr>
        </thead>
        <tbody className="border-0"></tbody>
      </table>
    </div>
  );
}

export default Price;
