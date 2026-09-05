import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Anggota {
    id: number;
    nomor_anggota: string;
    nama: string;
    email: string | null;
    no_hp: string | null;
    alamat: string | null;
    tanggal_bergabung: string | null;
    status: 'aktif' | 'nonaktif';
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedAnggota {
    data: Anggota[];
    links: PaginationLink[];
}

interface Props {
    anggotas: PaginatedAnggota;
}

export default function Index({ anggotas }: Props) {
    const deleteAnggota = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
            router.delete(`/anggota/${id}`);
        }
    };

    return (
        <>
            <Head title="Anggota" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Data Anggota</CardTitle>

                            <Button asChild>
                                <Link href="/anggota/create">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tambah Anggota
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="px-4 py-3 text-left">
                                            No
                                        </th>
                                        <th className="px-4 py-3 text-left">
                                            Nomor Anggota
                                        </th>
                                        <th className="px-4 py-3 text-left">
                                            Nama
                                        </th>
                                        <th className="px-4 py-3 text-left">
                                            Email
                                        </th>
                                        <th className="px-4 py-3 text-left">
                                            No HP
                                        </th>
                                        <th className="px-4 py-3 text-left">
                                            Status
                                        </th>
                                        <th className="px-4 py-3 text-right">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {anggotas.data.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={7}
                                                className="text-muted-foreground px-4 py-8 text-center"
                                            >
                                                Belum ada data anggota.
                                            </td>
                                        </tr>
                                    ) : (
                                        anggotas.data.map((anggota, index) => (
                                            <tr
                                                key={anggota.id}
                                                className="border-b"
                                            >
                                                <td className="px-4 py-3">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {anggota.nomor_anggota}
                                                </td>
                                                <td className="px-4 py-3 font-medium">
                                                    {anggota.nama}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {anggota.email ?? '-'}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {anggota.no_hp ?? '-'}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {anggota.status === 'aktif'
                                                        ? 'Aktif'
                                                        : 'Nonaktif'}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            asChild
                                                        >
                                                            <Link
                                                                href={`/anggota/${anggota.id}/edit`}
                                                            >
                                                                <Pencil className="h-4 w-4" />
                                                            </Link>
                                                        </Button>

                                                        <Button
                                                            variant="destructive"
                                                            size="icon"
                                                            onClick={() =>
                                                                deleteAnggota(
                                                                    anggota.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex gap-2">
                            {anggotas.links.map((link, index) => (
                                <Button
                                    key={index}
                                    variant={
                                        link.active ? 'default' : 'outline'
                                    }
                                    size="sm"
                                    disabled={!link.url}
                                    onClick={() =>
                                        link.url && router.visit(link.url)
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
