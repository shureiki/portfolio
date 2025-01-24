import { useMemo } from 'react';

import useFetch from '@/hooks/useFetch';
import userProjects from '@/data/userProjects';
import userInfo from '@/data/userInfo';

export default function useProjects() {
    const { data, loading } = useFetch(`https://api.github.com/users/${userInfo.pseudo}/repos`);

    const allProjects = useMemo(() => {
        return [...userProjects, ...(data ?? [])];
    }, [data]);

    const highlightedProjects = useMemo(() => {
        return allProjects.filter((repo) => repo.topics?.includes('to-portfolio'));
    }, [allProjects]);

    const projectsWithoutHighlighted = useMemo(() => {
        return allProjects.filter((repo) => !repo.topics?.includes('to-portfolio'));
    }, [allProjects]);

    return { loading, allProjects, highlightedProjects, projectsWithoutHighlighted };
}
