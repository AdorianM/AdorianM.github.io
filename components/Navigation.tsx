import Link from 'next/link'
import css from '../styles/Navigation.module.scss';
import { useRouter } from 'next/router'
import React from 'react';

interface IMenu {
    id: string;
    title: string;
    path: string;
}

const menus: IMenu[] = [
    {
      id: 'home',
      title: 'Home',
      path: '/articles/home'
    },
    {
      id: 'math',
      title: 'Math',
      path: '/articles/math'
    },
    {
      id: 'physics',
      title: 'Physics',
      path: '/articles/physics'
    },
    {
      id: 'tech',
      title: 'Tech',
      path: '/articles/tech'
    },
    {
      id: 'others',
      title: 'Others',
      path: '/articles/others'
    }
  ];


const Navigation = () => {
    const router = useRouter()

    return (
        <nav className={css.navigation}>
            <ul>
                {
                    menus.map((elem: any) => {
                        const selected = router.asPath === elem.path ? css.selected + ' ' : ' '
                        const category = css[`category-${elem.title.toLowerCase()}`]
                        const classes = `${selected}${category}`

                        return (
                            <li key={elem.id}>
                                <Link href={{
                                    pathname: '/articles/' + elem.id,
                                  }}>
                                    <a className={classes}>{elem.title}</a>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;
export type { IMenu };