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
      path: '/'
    },
    {
      id: 'math',
      title: 'Math',
      path: '/math'
    },
    {
      id: 'physics',
      title: 'Physics',
      path: '/physics'
    },
    {
      id: 'tech',
      title: 'Tech',
      path: '/tech'
    },
    {
      id: 'others',
      title: 'Others',
      path: '/others'
    }
  ];


const Navigation = () => {
    const router = useRouter()

    return (
        <nav className={css.navigation}>
            <ul>
                {
                    menus.map((elem: any) => {
                        const selected = router.pathname === elem.path ? css.selected + ' ' : ' '
                        const category = css[`category-${elem.title.toLowerCase()}`]
                        const classes = `${selected}${category}`

                        return (
                            <li key={elem.id}>
                                <Link href={elem.path}>
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