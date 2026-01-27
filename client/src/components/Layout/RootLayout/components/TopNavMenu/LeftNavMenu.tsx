import bookmakr from "@assets/svg/bookmark.svg"
import group_icon from "@assets/svg/group-icon.svg"
import night_mode from "@assets/svg/night-mode.svg"
import setting from "@assets/svg/setting.svg"
import avatar from "@assets/img/avatar.png"

export const TopNavMenu: React.FC = () => {
    return (
        <nav className="TopNavMenu">
            <section className="TopNavMenu_left_block">
                <button>
                    <img src={bookmakr} alt="bookmakr" />
                </button>
                <button>
                    <img src={group_icon} alt="bookmakr" />
                </button>
                <button>
                    <img src={night_mode} alt="bookmakr" />
                </button>
                <button>
                    <img src={setting} alt="bookmakr" />
                </button>
            </section>
            <section className="TopNavMenu_center_info_block">
                <section className="Person_info">
                    <img src={avatar} alt="avatar" />
                    <section className="Person_info_name_activity">
                        <h3>Маша Машева</h3>
                        <span>был(а) в сети 15 минут назад</span>
                    </section>
                </section>
            </section>
        </nav>
    )
}