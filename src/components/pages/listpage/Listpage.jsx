import './listpage.scss'
import { listData } from '../../../lib/dummydata';
import Filter from '../../filter/Filter';
import Card from '../../card/Card';
import Map from '../../map/Map';

function Listpage(){
    const data = listData;
    return (
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
                        <Card key = {item.id} item={item}/>
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    )
}

export default Listpage;