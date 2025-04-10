import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";

const TopTileMenu = () => {

    const navigate = useNavigate();

    const TOP_MENU = [
        {
            label: 'Daily Update',
            icon: 'pi pi-calendar-plus',
            to: RENDER_URL.VIEW_DAILY_UPDATES
        },
        {
            label: 'Weekly updates',
            icon: 'pi pi-clock',
            to: RENDER_URL.VIEW_WEEKLY_UPDATES
        },
        {
            label: 'Guidelines',
            icon: 'pi pi-info-circle',
            to: ''
        }
    ]


    return (
        <div className="d-flex flex-nowrap overflow-auto" style={{ gap: "1rem", padding: "1rem" }}>
            {TOP_MENU.map((element, idx) => (
                <div key={idx} className="card" style={{ width: '80px', height: '80px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => {
                    navigate(element.to);
                }} >
                    <div className="card-body d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
                        <i className={`${element.icon} text-center`} style={{ fontSize: '1.1rem', color: '#888787' }} ></i>
                        <span className="text-center " style={{ fontSize: 'x-small' }}>{element.label}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default TopTileMenu;