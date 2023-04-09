;(() => {
	//? Applying the principle of single responsibility
	//? Prioritizing composition over inheritance

	type Gender = "M" | "F"

	interface PersonProps {
		birthdate: Date
		gender: Gender
		name: string
	}

	class Person {
		public birthdate: Date
		public gender: Gender
		public name: string

		constructor({ birthdate, gender, name }: PersonProps) {
			this.birthdate = birthdate
			this.gender = gender
			this.name = name
		}
	}

	interface UserProps {
		email: string
		role: string
	}

	class User {
		public email: string
		public lastAccess: Date
		public role: string

		constructor({ email, role }: UserProps) {
			this.email = email
			this.lastAccess = new Date()
			this.role = role
		}

		checkCredentials(): boolean {
			return true
		}
	}

	interface SettingProps {
		lastOpenFolder: string
		workingDirectory: string
	}

	class Setting {
		public lastOpenFolder: string
		public workingDirectory: string

		constructor({ lastOpenFolder, workingDirectory }: SettingProps) {
			this.lastOpenFolder = lastOpenFolder
			this.workingDirectory = workingDirectory
		}
	}

	interface UserSettingProps {
		birthdate: Date
		email: string
		gender: Gender
		lastOpenFolder: string
		name: string
		role: string
		workingDirectory: string
	}

	class UserSetting {
		public person: Person
		public user: User
		public setting: Setting

		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory
		}: UserSettingProps) {
			this.person = new Person({ birthdate, gender, name })
			this.user = new User({ email, role })
			this.setting = new Setting({ lastOpenFolder, workingDirectory })
		}
	}

	const userSettings = new UserSetting({
		birthdate: new Date("1985-10-21"),
		email: "admi.jmb@gmail.com",
		gender: "M",
		lastOpenFolder: "/home",
		name: "Rolando",
		role: "Admin",
		workingDirectory: "/usr/home"
	})
	console.log({ userSettings })
})()
