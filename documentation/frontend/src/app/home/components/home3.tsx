export default function home3() {
    return (
        <>
            <div className="pt-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <span className="text-5xl font-semibold">
                                    {stat.value}
                                </span>
                                <span className="text-base leading-7">
                                    {stat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

interface Stat {
    id: number;
    name: string;
    value: string;
}

const stats: Stat[] = [
    { id: 1, name: '서비스 이용자 수', value: '120+' },
    { id: 2, name: '생성된 가상은행 수', value: '120+' },
    { id: 3, name: 'API 호출 건수', value: '120+' },
    { id: 4, name: '앱 다운로드 횟수', value: '120+' }
];