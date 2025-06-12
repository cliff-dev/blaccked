import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { Image } from "@/components/image";
import { SafeAreaView } from "@/components/safe-area-view";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import { useColorScheme } from "@/lib/useColorScheme";

export default function WelcomeScreen() {
	const router = useRouter();
	const { colorScheme } = useColorScheme();
	const appIcon =
		colorScheme === "dark"
			? require("@/assets/icon.png")
			: require("@/assets/icon-dark.png");

	return (
		<SafeAreaView className="flex flex-1 bg-background p-4">
			<View className="flex flex-1 items-center justify-center gap-y-4 web:m-4">
				<Image source={appIcon} className="w-16 h-16 rounded-xl" />
				<H1 className="text-center">Blacked</H1>
				<Muted className="text-center">
					Find the one for you
				</Muted>
			</View>
			<View className="flex flex-col gap-y-4 web:m-4">
				<Button
					size="default"
					variant="default"
					className="rounded-full shadow-md bg-black active:scale-95 transition-transform duration-150"
					onPress={() => {
						router.push("/sign-up");
					}}
				>
					<Text className="text-white text-2xl font-bold">Sign Up</Text>
				</Button>
				<Button
					size="default"
					variant="secondary"
					className="rounded-full border border-black shadow-sm bg-white active:scale-95 transition-transform duration-150"
					onPress={() => {
						router.push("/sign-in");
					}}
				>
					<Text className="text-black text-lg font-bold">Sign In</Text>
				</Button>
				<Muted 
					className="text-center underline cursor-pointer"
					onPress={() => router.push("/terms")}
				>
					Terms and Conditions
				</Muted>
			</View>
		</SafeAreaView>
	);
}
