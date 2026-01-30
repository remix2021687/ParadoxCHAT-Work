import { Plus, MagnifyingGlass } from "@phosphor-icons/react"

export const HomePageUserList: React.FC = () => {
    return (
        <section className="HomePageUserList">
            <section className="HomePageUserList_header">
                <h2>Чаты</h2>
                <button>
                    <Plus size={20} weight="bold" color="white"/>
                </button>
            </section>
            <section className="HomePageUserList_category">
                <button>Все</button>
                <button>Приватные</button>
                <button>Общие</button>
            </section>
            <section className="HomePageUserList_conetent">
                <label htmlFor="search_input" className="HomePageUserList_conetent_search">
                    <MagnifyingGlass size={18} />
                    <input id="search_input" placeholder="Поиск людей и каналов..." />
                </label>
                <section className="HomePageUserList_conetent_list_user">

                </section>
            </section>
        </section>
    )
}