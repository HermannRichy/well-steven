import { MoreHorizontalIcon, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Header() {
    const navigation = [
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/a-propos" },
        { name: "Services", href: "/services" },
        { name: "Formations", href: "/formations" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <>
            <header className="flex items-center justify-between p-4 lg:hidden">
                <h1 className="font-momo font-bold text-primary text-xl">
                    <span className="text-secondary">Well</span> Steven
                </h1>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            aria-label="Open menu"
                            size="icon-lg"
                        >
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72" align="end">
                        <DropdownMenuGroup>
                            {navigation.map((item) => (
                                <DropdownMenuItem
                                    key={item.name}
                                    className="border-b border-gray-100"
                                >
                                    <Link href={item.href}>{item.name}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <header className="hidden lg:block">
                <div className="max-w-6xl mx-auto py-5 flex items-center justify-between">
                    <h1 className="font-momo font-bold text-primary text-2xl">
                        <span className="text-secondary">Well</span> Steven
                    </h1>
                    <nav className="flex space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-primary hover:text-primary/80"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <InteractiveHoverButton className="bg-secondary text-sm">
                        <Link href="tel:+2290190479512">Appelez-nous</Link>
                    </InteractiveHoverButton>
                </div>
            </header>
        </>
    );
}
