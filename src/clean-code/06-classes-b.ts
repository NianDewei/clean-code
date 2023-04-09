;(() => {
	//! Not applying the principle of single responsibility

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

	interface UserProps extends PersonProps {
		email: string
		role: string
	}

	class User extends Person {
		public email: string
		public lastAccess: Date
		public role: string

		constructor({ birthdate, email, gender, role, name }: UserProps) {
			super({ name, gender, birthdate })
			this.email = email
			this.lastAccess = new Date()
			this.role = role
		}

		checkCredentials() {
			return true
		}
	}

	interface UserSettingProps extends UserProps {
		lastOpenFolder: string
		workingDirectory: string
	}

	class UserSettings extends User {
		public lastOpenFolder: string
		public workingDirectory: string

		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory
		}: UserSettingProps) {
			super({ name, gender, birthdate, email, role })
			this.lastOpenFolder = lastOpenFolder
			this.workingDirectory = workingDirectory
		}
	}

	const userSettings = new UserSettings({
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
