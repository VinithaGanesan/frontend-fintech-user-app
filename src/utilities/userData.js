import React from 'react'

export default function userData() {

    const fetchInfo = () => {
        return fetch(getExpenseAPI)
            .then((res) => res.json())
            .then((d) => {
                setAllexpenses(d.data);
                console.log(d.data);
            })
    }

    useEffect(() => {
        fetchInfo();
    }, []);
  return (
    <div>


    </div>
  )
}
